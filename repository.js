
class Repository {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    async getAll(filters) {
        return await this.model.find(filters);
    }

    async get(id) {
        return await this.model.find({ _id: id });
    }

    async remove(id) {
        return await this.model.findOneAndRemove({ _id: id });
    }

    async add(record) {
        var newRecord = new this.model();
        Object.keys(record).forEach(function (key) {
            newRecord[key] = record[key];
        });
        return await newRecord.save();
    }

    async update(id, record) {
        return await this.model.findOneAndUpdate({ _id: id }, record, { upsert: true });
    }
}

module.exports = Repository;