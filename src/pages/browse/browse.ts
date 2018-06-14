import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { CharityPage } from '../charity_page/charity_page';

@Component({
    selector: 'page-browse',
    templateUrl: 'browse.html'
})
export class BrowsePage {


    public charities: Array<Charity> = [];

    constructor(public navCtrl: NavController) {
        var charity1 = new Charity();
        charity1.id = 1;
        charity1.name = "Relay For Life";
        charity1.mission = "Relay is a team fundraising event where team members take turns walking around a track or designated path. Each event is 6-24 hours in length and each team is asked to have a member on the track at all times to signify that cancer never sleeps. Cancer patients don't stop because they're tired, and for one night, neither do we. Each team sets up a themed campsite at the event and continues their fundraising efforts by collecting donations for food, goods, games, and activities. This money will count towards their overall team fundraising goal.";
        charity1.category = "Cancer";
        charity1.websiteUrl = "http://relayforlife.org";
        charity1.logoUrl = "http://www.relayforlife.org.za/wp-content/themes/relayforlife16/img/Relay-For-Life.svg";
        charity1.imageUrl = "http://www.relayforlife.org.za/wp-content/themes/relayforlife16/img/Relay-For-Life.svg";

        var charity2 = new Charity();
        charity2.id = 2;
        charity2.name = "Habitat For Humanity";
        charity2.mission = "We facilitate the election and formation of a body of community leaders. Through leadership and skills development the leaders are equipped to lead their communities. Through a series of workshops, we help the people of the community to understand their own housing development project.We equip them with essential knowledge ranging from practical home partner information to the role of the stakeholders, to the costs, materials, regulations and basic architecture of their homes.";
        charity2.category = "Housing";
        charity2.websiteUrl = "https://www.habitat.org";
        charity2.logoUrl = "http://austindesign.biz/wp-content/uploads/2017/07/habitat-for-humanity-logo-795x795.jpg";
        charity2.imageUrl = "http://austindesign.biz/wp-content/uploads/2017/07/habitat-for-humanity-logo-795x795.jpg";

        var charity3 = new Charity();
        charity3.id = 3;
        charity3.name = "Unicef";
        charity3.mission = "UNICEF works to improve the policies and services that protect all children. We aim to make the world a safe and inclusive place for children to grow.";
        charity3.category = "Children";
        charity3.websiteUrl = "http://unicef.org";
        charity3.logoUrl = "http://getinthepicture.org/sites/default/files/images/partner/logos/unicef.png";
        charity3.imageUrl = "https://www.unicef.org/sites/default/files/styles/media_banner/public/2018-02/01_HP_UNI158415_Bluewash_WEB.jpg?itok=PU_hg3j5";

        var charity4 = new Charity();
        charity4.id = 4;
        charity4.name = "Save The Rhino";
        charity4.mission = "More than 8,000 rhinos have been killed for their horns since 2007. Together we can halt the key threats of poaching and habitat loss so that rhinos will no longer be near extinction. But we need to act now.";
        charity4.category = "Animals";
        charity4.websiteUrl = "https://www.savetherhino.org/";
        charity4.logoUrl = "https://i.pinimg.com/originals/21/a7/63/21a763d382d95e9eb89f5fb7381e4b06.jpg"
        charity4.imageUrl = "http://eco18.com/wp-content/uploads/2017/05/AdobeStock_1004871.jpeg"

        var charity5 = new Charity();
        charity5.id = 5;
        charity5.name = "Doctors Without Borders";
        charity5.mission = "Doctors Without Borders (MSF) was founded in 1971 in France by a group of doctors and journalists in the wake of war and famine in Biafra, in Nigeria. Their aim was to establish an independent organisation that focuses on delivering emergency medical aid quickly, effectively and impartially while also speaking out about what they witnessed.";
        charity5.category = "International NGOs"
        charity5.websiteUrl = "https://www.msf.org.za/about-us/msf-history-and-charter"
        charity5.logoUrl = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/24882312210439.562651c5e83fe.jpg"
        charity5.imageUrl = "https://i1.wp.com/real-leaders.com/wp-content/uploads/2015/09/doctors-without-borders.jpg?resize=900%2C600&ssl=1"

        var charity6 = new Charity();
        charity6.id = 6;
        charity6.name = "Global Education Fund";
        charity6.mission = "Global Education Fund is committed to helping children see possibilities beyond what they experience every day, and we work to give children the opportunity to make a difference in their lives and communities. Through education, we envision each child having access to the greater world and the opportunity to participate in it.";
        charity6.category = "Education";
        charity6.websiteUrl = "http://www.globaleducationfund.org/";
        charity6.logoUrl = "https://educationinnovations.org/sites/default/files/gef_logo.png";
        charity6.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6F4tkGE1k4MynVFaYWLnsOW5YAdn2H8PWhDTb_nBdEMnsEB4Gg";

        var charity7 = new Charity();
        charity7.id = 7;
        charity7.name = "AIDs foundation of South Africa";
        charity7.mission = "Helping community-based organisations to limit the spread of HIV/Aids and mitigate the impact of the epidemic on South Africa’s most vulnerable communities.";
        charity7.category = "Disease";
        charity7.websiteUrl = "https://www.aids.org.za";
        charity7.logoUrl = "http://www.ngopulse.org/sites/default/files/styles/sn_announce_logo/public/images/opportunity/sn_announce_logo/Logo_25.jpg?itok=bA996o8D";
        charity7.imageUrl = "http://www.ngopulse.org/sites/default/files/styles/sn_announce_logo/public/images/opportunity/sn_announce_logo/Logo_25.jpg?itok=bA996o8D";

        var charity8 = new Charity();
        charity8.id = 8;
        charity8.name = "Wilderness Foundation Africa";
        charity8.mission = "We envisage a world that has sufficient intact natural ecosystems and wilderness areas that are valued and effectively protected for the benefit of all species.";
        charity8.category = "Nature";
        charity8.websiteUrl = "http://www.wildernessfoundation.co.za";
        charity8.logoUrl = "https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/26804782_1676829795711641_5467131986775079302_n.jpg?_nc_cat=0&oh=fae8dd0c1ea7c31290f49daa50400442&oe=5BC4B66E";
        charity8.imageUrl = "http://www.traveller.com.au/content/dam/images/g/j/u/p/u/6/image.related.articleLeadwide.620x349.gjuvbd.png/1443506880788.jpg";

        var charity9 = new Charity();
        charity9.id = 9;
        charity9.name = "4 Ocean";
        charity9.mission = "-Approximately 16 billion pounds of plastic enter the ocean each year- We're on a mission to stop this";
        charity9.category = "Nature";
        charity9.websiteUrl = "https://4ocean.com/?gclid=EAIaIQobChMIuMrP4P7S2wIV7ZTtCh37Jg-VEAAYASAAEgJDv_D_BwE";
        charity9.logoUrl = "https://cdn20.patchcdn.com/users/1695373/20170921/072434/styles/T800x600/public/processed_images/4ocean-1506036032-3914.jpg";
        charity9.imageUrl = "http://cdn.shopify.com/s/files/1/0996/1022/products/4ocean-bracelet-the-4ocean-bracelet-588160598034_grande.jpg?v=1527495787";

        var charity10 = new Charity();
        charity10.id = 10;
        charity10.name = "Endangered Wildlife Trust";
        charity10.mission = "A beacon of hope for Africa’s wildlife, landscapes and communities, the EWT is protecting forever, together.";
        charity10.category = "Wildlife";
        charity10.websiteUrl = "https://www.ewt.org.za";
        charity10.logoUrl = "http://dtnac4dfluyw8.cloudfront.net/img/ewt_logo_9540.jpg";
        charity10.imageUrl = "https://www.ewt.org.za/WTP/wtpbanner.jpg";

        this.charities.push(charity1);
        this.charities.push(charity2);
        this.charities.push(charity3);
        this.charities.push(charity4);
        this.charities.push(charity5);
        this.charities.push(charity6);
        this.charities.push(charity7);
        this.charities.push(charity8);
        this.charities.push(charity9);
        this.charities.push(charity10);
    }

    navigateToCharity(charity: Charity) {
        this.navCtrl.push(CharityPage, { charity: charity });
    }
}
