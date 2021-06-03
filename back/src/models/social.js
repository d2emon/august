import Model from "./model";

class Social extends Model {
    static async find(query) {
        return [
            {
                id: 'facebook',
                title: 'facebook',
                href: 'http://freewebsitetemplates.com/go/facebook/',
            },
            {
                id: 'twitter',
                title: 'twitter',
                href: 'http://freewebsitetemplates.com/go/twitter/',
            },
            {
                id: 'googleplus',
                title: 'youtube',
                href: 'http://freewebsitetemplates.com/go/youtube/',
            },
        ];
    }
}

export default Social;
