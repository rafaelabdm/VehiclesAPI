class Vehicles {
	constructor (db) {
		this.db = db;
	}

	//POST
	save(body, callback) {
		const { id, brand, owner, color, year } = body;
		const fixBrand = String(brand).toLowerCase();
		const sql = `INSERT INTO vehicles (id, brand, owner, color, year) VALUES(?, ?, ?, ?, ?);`;
		this.db.run(
		  sql,
		  [ id, fixBrand, owner, color, year ],
		  callback.bind(this)
		);
	}
  
	// GET ALL
	findAll(callback) {
		const sql = `SELECT * FROM vehicles`;
	
		this.db.all(sql, callback);
	}

	// GET BY ID
	findById(id, callback) {
		const sql = `SELECT DISTINCT * FROM vehicles WHERE id=?;`;
		this.db.all(sql, [id], callback);
	}

	// GET BY BRAND
	findByBrand(brand, callback) {
		const fixBrand = String(brand).toLowerCase();
		const sql = `SELECT * FROM vehicles WHERE brand='${fixBrand}';`;
		this.db.all(sql, callback);
	}

	// PATCH
	updatePartial(id, data, callback) {
		let vehiclesData = Object.entries(data);
		let fields = []
		for(let i = 0; i < vehiclesData.length; i++) {
			fields.push(`${vehiclesData[i][0]} = '${vehiclesData[i][1]}'`)
		}
	
		const sql = `UPDATE vehicles SET
						${fields.join(',')}
					WHERE
						id = '${id}'`;
		this.db.run(sql, callback);
	}

	// DELETE
	deleteOne(id, callback) {
	  const sql = `DELETE FROM vehicles WHERE id = ?`;
	  this.db.run(sql, [id], callback);
	}
}

module.exports = (dbConn) => new Vehicles(dbConn);