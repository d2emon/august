import Model from "./model";

class Category extends Model {
    static async find(query) {
        return [
            {
                id: 'brand',
                title: 'Брэнды',
            },
            {
                id: 'production',
                title: 'Продакшн',
            },
            {
                id: 'marketing',
                title: 'Маркетинг',
            },
        ];
    }
}

export default Category;
