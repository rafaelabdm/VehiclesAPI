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
exports.getOne = (req, res) => {
	const { id } = req.params;

	const callback = (err, data) => {
		if (err)
			return res.status(500).json( {msg: err});
		else if (data.length)
			return res.status(200).json(data[0]);
		return res.status(404).json({ msg: 'Vehicle not found!'});
	};

	const brandsList = ['acura', 'audi', 'bmw', 'bentley', 'buick', 'cadillac', 'chevrolet', 'chrysler',
		'dodge', 'fiat', 'fisker', 'ford', 'gmc', 'genesis', 'honda', 'hyundai', 'infiniti', 'jaguar',
		'jeep', 'kia', 'land rover', 'lexus', 'lincoln', 'lotus', 'lucid', 'maserati', 'mazda',
		'mercedes-benz', 'mini', 'mitsubishi', 'nissan', 'polestar', 'porsche', 'ram', 'rivian',
		'rolls-royce', 'scout', 'smart', 'subaru', 'suzuki', 'tesla', 'toyota', 'volkswagen',
		'volvo'];
	for(let i = 0; i < brandsList.length; i++) {
		if (String(id).toLowerCase() == brandsList[i]) {
			Vehicles.findByBrand(id, callback);
			return ;
		}
	}
	Vehicles.findById(id, callback);
};



// PUT
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