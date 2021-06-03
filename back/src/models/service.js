import Model from "./model";

class Service extends Model {
    static async find(query) {
        return [
            {
                id: 'link1',
                title: 'Дизайн',
                image: '/images/services/design.jpg',
            },
            {
                id: 'link2',
                title: 'SEO',
                image: '/images/services/seo.jpg',
            },
            {
                id: 'link3',
                title: 'Копирайтинг',
                image: '/images/services/design.jpg',
            },
        ];
    }

    static async findById(id) {
        const services = {
            link1: {
                id: 'link1',
                title: 'Дизайн Логотипа',
                image: '/images/services/logo-design.jpg',
                text: `
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
                projects: [
                    {
                        id: 'logo1',
                        image: '/images/projects/logo1.jpg',
                        client: 'Elizabeth Morrisson',
                    },
                    {
                        id: 'logo2',
                        image: '/images/projects/logo2.jpg',
                        client: 'Elizabeth Morrisson',
                    },
                    {
                        id: 'logo3',
                        image: '/images/projects/logo3.jpg',
                        client: 'Elizabeth Morrisson',
                    },
                    {
                        id: 'logo4',
                        image: '/images/projects/logo4.jpg',
                        client: 'Elizabeth Morrisson',
                    },
                    {
                        id: 'logo5',
                        image: '/images/projects/logo5.jpg',
                        client: 'Elizabeth Morrisson',
                    },
                    {
                        id: 'logo6',
                        image: '/images/projects/logo6.jpg',
                        client: 'Elizabeth Morrisson',
                    },
                    {
                        id: 'logo7',
                        image: '/images/projects/logo7.jpg',
                        client: 'Elizabeth Morrisson',
                    },
                    {
                        id: 'logo8',
                        image: '/images/projects/logo8.jpg',
                        client: 'Elizabeth Morrisson',
                    },
                ],
            },
            link2: {
                id: 'link2',
                title: 'Web Дизайн',
                image: '/images/services/web-design.jpg',
                text: `
        <p>
          Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <a href="http://www.freewebsitetemplates.com/about/terms">Terms of Use</a>. You can even remove all our links if you want to.
        </p>
        `,
                projects: [],
            },
            link3: {
                id: 'link3',
                title: 'Дизайн Для Печати',
                image: '/images/services/print-design.jpg',
                text: `
          <p>
            Looking for more templates? Just browse through all our <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> and find what you're looking for. But if you don't find any website template you can use, you can try our <a href="http://www.freewebsitetemplates.com/freewebdesign/">Free Web Design</a> service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.
          </p>
          <p>
            If you're experiencing issues and concerns about this website template, join the discussion <a href="http://www.freewebsitetemplates.com/forums/">on our forum</a> and meet other people in the community who share the same interests with you.
          </p>
        `,
                projects: [],
            },
        };
        return services[id];
    }
}

export default Service;
