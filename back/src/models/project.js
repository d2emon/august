import Model from "./model";

class Project extends Model {
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

    static async findLatest() {
        return [
            {
                id: 'template1',
                title: 'Web Design',
                client: 'Frosty Sweets',
                image: '/images/projects/template1.jpg',
            },
            {
                id: 'template2',
                title: 'Corporate Identity',
                client: 'Puppy Love',
                image: '/images/projects/template2.jpg',
            },
            {
                id: 'template3',
                title: 'Advertising Campaign',
                client: 'Baby School',
                image: '/images/projects/template3.jpg',
            },
        ];
    }
}

export default Project;
