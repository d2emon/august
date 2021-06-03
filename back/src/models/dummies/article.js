import Model from "./model";

class Article extends Model {
    static async find(query) {
        return [
            {
                id: 'its-all-about-image',
                title: 'Its\' All About Image',
                published: 'Mar 22, 2023',
            },
            {
                id: 'its-all-about-image',
                title: 'Its\' All About Image',
                published: 'Mar 22, 2023',
            },
            {
                id: 'its-all-about-image',
                title: 'Its\' All About Image',
                published: 'Mar 22, 2023',
            },
        ];
    }

    static async findById(id) {
        const articles = {
            'its-all-about-image': {
                id: 'its-all-about-image',
                text: `
    <img src="/images/blog/photo-shoot.jpg" alt="">
    <p>
      This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text.
    </p>
    <p>
      You can remove any link to our website from this website template, you're free to use this
      website template without linking back to us.
    </p>
    <p>
      If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
    </p>
      `,
            },
        };
        return articles[id];
    }
}

export default Article;
