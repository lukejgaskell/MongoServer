
var Controller = function(name, repository, app) {
    console.log('Setting up ' + name + " Controller");
    this.name = name;
    this.repository = repository;
    this.app = app;
    this.getAll();
    this.get();
    this.remove();
    this.add();
    this.update();
};

Controller.prototype.getAll = function() {
    this.app.get('/api/'+ this.name, function(req, res) {
        this.repository.getAll(function(err, records) {
            if (err) {
                return res.sendStatus(500);
            }
            if (!records) {
                return res.status(500).send("Failed to get " + this.name + 's');
            }
            return res.status(200).send(records);
        });
    }.bind(this));
};

Controller.prototype.get = function() {
    this.app.get('/api/'+ this.name + '/:id', function(req, res) {
        this.repository.get(req.params.id, function(err, record) {
            if (err) {
                return res.sendStatus(500);
            }
            if (!record) {
                return res.status(500).send("Failed to get " + this.name);
            }
            return res.status(200).send(record);
        });
    }.bind(this));
};

Controller.prototype.remove = function() {
    this.app.delete('/api/'+ this.name + '/:id', function(req, res) {
        this.repository.remove(req.params.id, function(err, successful) {
            if (err) {
                return res.sendStatus(500);
            }
            if (!successful) {
                return res.status(500).send("Failed to delete " + this.name);
            }
            return res.sendStatus(200);
        });
    }.bind(this));
};

Controller.prototype.add = function() {
    this.app.post('/api/'+ this.name, function(req, res) {
        this.repository.add(req.body, function(err, record) {
            if (err) {
                return res.sendStatus(500);
            }
            if (!record) {
                return res.status(500).send("Failed to add " + this.name);
            }
            return res.status(200).send(record);
        });
    }.bind(this));
};

Controller.prototype.update = function() {
    this.app.post('/api/'+ this.name + '/:id', function(req, res) {
        this.repository.update(req.body, function(err, record) {
            if (err) {
                return res.sendStatus(500);
            }
            if (!record) {
                return res.status(500).send("Failed to update " + this.name);
            }
            return res.status(200).send(record);
        });
    }.bind(this));
};


module.exports = Controller;