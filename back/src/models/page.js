import Model from "./model";

class Page extends Model {
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
        const pages = {
            about: {
                id: 'about',
                text: `
    <h2>About</h2>
    <img src="/images/paper-wheel.jpg" alt="">
    <h4><span>We Have Free Templates for Everyone</span></h4>
    <p>
      Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <a href="http://www.freewebsitetemplates.com/about/terms">Terms of Use</a>. You can even remove all our links if you want to.
    </p>
    <h4><span>We Have More Templates for You</span></h4>
    <p>
      Looking for more templates? Just browse through all our <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> and find what you're looking for. But if you don't find any website template you can use, you can try our <a href="http://www.freewebsitetemplates.com/freewebdesign/">Free Web Design</a> service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.
    </p>
    <h4><span>Be Part of Our Community</span></h4>
    <p>
      If you're experiencing issues and concerns about this website template, join the discussion <a href="http://www.freewebsitetemplates.com/forums/">on our forum</a> and meet other people in the community who share the same interests with you.
    </p>
    <h4><span>Template details</span></h4>
    <p>
      Design version 6 <br> Code version 3 <br><br> Website Template details, discussion and updates for this <a href="http://www.freewebsitetemplates.com/discuss/finemindsmarketingwebtemplate/">Fineminds Marketing Web Template</a>. <br><br> Website Template design by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a>. <br><br> <span style="font-size:11px;">Please feel free to remove some or all the text and links of this page and replace it with your own About content.</span>
    </p>
      `,
            },
        };
        return pages[id];
    }
}

export default Page;
