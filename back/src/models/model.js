class Model {
    constructor(data) {
        this.data = data;
    }

    static async find(query) {
        return [];
    }

    static async findById(id) {
        return null;
    }

    static async findByIdAndUpdate(id, data) {
        return null;
    }

    static async findByIdAndDelete(id) {
        return null;
    }
}

export default Model;
