
class Controller {
    constructor(name, repository, app) {
        console.log('Setting up ' + name + " Controller");
        this.name = name;
        this.repository = repository;
        this.app = app;
        this.getAll();
        this.get();
        this.remove();
        this.add();
        this.update();
    }

    getAll() {
        this.app.get('/api/' + this.name, function (req, res) {
            var records = this.repository.getAll(req.query);
            if (!records) {
                return res.status(500).send("Failed to get " + this.name + 's');
            }
            return res.status(200).send(records);
        }.bind(this));
    }

    get() {
        this.app.get('/api/' + this.name + '/:id', function (req, res) {
            var record = this.repository.get(req.params.id);
            if (!record) {
                return res.status(500).send("Failed to get " + this.name);
            }
            return res.status(200).send(record);
        }.bind(this));
    }

    remove() {
        this.app.delete('/api/' + this.name + '/:id', function (req, res) {
            var response = this.repository.remove(req.params.id);
            if (!response) {
                return res.status(500).send("Failed to delete " + this.name);
            }
            return res.sendStatus(200);
        }.bind(this));
    }

    add() {
        this.app.post('/api/' + this.name, function (req, res) {
            var record = this.repository.add(req.body);
            if (!record) {
                return res.status(500).send("Failed to add " + this.name);
            }
            return res.status(200).send(record);
        }.bind(this));
    }

    update() {
        this.app.put('/api/' + this.name + '/:id', function (req, res) {
            var record = this.repository.update(req.params.id, req.body);
            if (!record) {
                return res.status(500).send("Failed to update " + this.name);
            }
            return res.status(200).send(record);
        }.bind(this));
    }
}


module.exports = Controller;