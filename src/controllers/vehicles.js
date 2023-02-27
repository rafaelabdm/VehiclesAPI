const dbConn = require("../../infra/dbConn.js");
const Vehicles = require("../dao/vehicles")(dbConn);

// POST
exports.createOne = (req, res) => {
	Vehicles.save(req.body, (id, err) => {
	  if(err) {
		res.status(500).json({ msg: err });
	  } else {
		res.status(201).json({ id, ...req.body });
	  }
	});
};

// GET
exports.getAll = (req, res) => {
	const callback = (err, data) => {
		if (err)
			return res.status(500).json({msg: err});
		return res.json(data);
	};

	Vehicles.findAll(callback);
};

// GET ONE
function is_brand(id) {
	for(i in id) {
		if (!isNaN(Number(id[i])))
			return (false);
	}
	return (true)
}

exports.getOne = (req, res) => {
	const { id } = req.params;

	const callback = (err, data) => {
		if (err)
			return res.status(500).json( {msg: err});
		else if (data.length)
			return res.status(200).json(data[0]);
		return res.status(404).json({ msg: 'Vehicle not found!'});
	};

	if (is_brand(id))
		Vehicles.findByBrand(id, callback);
	else
		Vehicles.findById(id, callback);
};

// PATCH
exports.changeOne = (req, res) => {
	Vehicles.updatePartial(req.params.id, req.body, (err) => {
		if (err)
			return res.status(500).send({msg: err});
		return res.status(204).send({msg: 'Vehicle info updated!'});
	});
}

// DELETE
exports.removeOne = (req, res) => {
  const { id } = req.params;

  Vehicles.deleteOne(id, (err, data) => {
    if (!err)
    	return res.status(204).json({msg: 'Vehicle deleted!'});
  });
}
