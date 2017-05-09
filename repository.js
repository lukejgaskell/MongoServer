

var Repository = function (name, model) {
    this.name = name;
    this.model = model;
};

Repository.prototype.getAll = function (filters, cb) {
    this.model.find(filters, function (err, items) {
        if (err) {
            return cb(err);
        }
        return cb(null, items);
    });
};

Repository.prototype.get = function (id, cb) {
    this.model.find({ _id: id }, function (err, item) {
        if (err) {
            return cb(err);
        }
        return cb(null, item);
    });
};

Repository.prototype.remove = function (id, cb) {
    this.model.findOneAndRemove({ _id: id }, function (err) {
        if (err) {
            return cb(err);
        }
        return cb(null, true);
    });
};

Repository.prototype.add = function (record, cb) {
    var newRecord = new this.model();
    Object.keys(record).forEach(function (key) {
        newRecord[key] = record[key];
    });
    newRecord.save(function (err, doc) {
        if (err) {
            return cb(err);
        }
        return cb(null, doc);
    });
};

Repository.prototype.update = function (id, record, cb) {
    this.model.findOneAndUpdate({ _id: id }, record, { upsert: true }, function (err, doc) {
        if (err) return cb(err);
        return cb(null, true);
    });
};

module.exports = Repository;