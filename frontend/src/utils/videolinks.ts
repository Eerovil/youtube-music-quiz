/*

// Get all video links from a youtube playlist with this snippet
var dataList = "title;id\n";
var els = document.getElementsByClassName('yt-simple-endpoint style-scope ytd-playlist-video-renderer');
var id="";
var title="";

for(i = 0;i<els.length;i++){
    var el = els[i];
    var title = el.title;
    title = title.replace(/ \(.*\)/g, '');
    title = title.replace(/ \[.*\]/g, '');
    // title = title.replace(//g, '');
    
    dataList += (title + ";" + el.href.split('?v=')[1].split('&list')[0] + "\n");
}
console.log(dataList);
*/

interface VideoLinkGroup {
    title: string;
    data: string;
}

export interface VideoLink {
    title: string;
    id: string;
    thumbnail: string;
}

export interface ParsedVideoLinkGroup {
    title: string;
    links: VideoLink[];
}


const videoLinks: { [key: string]: VideoLinkGroup[] } = {
    nightwish: [
        {
            title: "Angels Fall First",
            data: `
            Elvenpath;GwKDj2YALVQ
            Beauty And The Beast;X4f8iN15vVE
            The Carpenter;vFtF5xr7WTQ
            Astral Romance;m_y2Xm8t8Ik
            Angels Fall First;vSRzCOEnY4Q
            Tutankhamen;FNjRfjJEF20
            Nymphomaniac Fantasia;5F3ZK52HzZg
            Know Why The Nightingale Sings;0mEGX4z6BZk
            Lappi;pxl3jAMuN7M
            Return To The Sea;3zFmsW078aI
            Once Upon A Troubadour;pTzpx-dsGPc
            `
        },
        {
            title: "Oceanborn",
            data: `
            Stargazers;P0O6d4-odEA
            Gethsemane;BYxfmzyIYfk
            Devil & The Deep Dark Ocean;KqwvEowkY_0
            Sacrament of Wilderness;FzceqsnsRyA
            Passion And The Opera;xWnuv2v3nXQ
            Swanheart;pfvqzHu-VPE
            Moondance;4XAjn8VXieQ
            The Riddler;dhTq_ocnYDg
            The Pharaoh Sails To Orion;81xrNu0MowY
            Walking In The Air;6BGcneQMrKU
            Sleeping Sun;tNDCFQdi7oU
            Nightquest;pgEZS-nyoh4
            `
        },
        {
            title: "Wishmaster",
            data: `
            She Is My Sin;iUaa0s44w5g
            The Kinslayer;kGocsn-Zzmg
            Come Cover Me;u6z8i7LFPNQ
            Two For Tragedy;oKU6y46ybO0
            Wanderlust;RBCzeUlBlQg
            Wishmaster;VyC_puO0ESU
            Bare Grace Misery;2tSgAduee8o
            Crownless;cvfiyT8XNrE
            Deep Silent Complete;jn1HCdaWRAo
            Dead Boy's Poem;85pt09RUl6E
            FantasMic;xFTSbZ3SeJE
            Sleepwalker;L9rGeglGm84
            `
        },
        {
            title: "Over The Hills And Far Away EP",
            data: `
            Over The Hills And Far Away;_Bk0PlEIpa8
            10th Man Down;flj6AKoWE3k
            Away;Hg84k2CNNas
            `
        },
        {
            title: "Century Child",
            data: `
            Bless the Child;gSohqju69GY
            End of all Hope;LWZtF9PLFok
            Dead to the World;YpHmrImI148
            Ever Dream;Uiiw0-ZW1DU
            Slaying the Dreamer;bJZrfUoZNZI
            Forever Yours;DxygxngCIPU
            Ocean Soul;6xnLWZh5XPE
            Feel for You;0TekrprUeX4
            Phantom of the Opera;wPj7N8oNA0g
            Beauty of the Beast;kKR8uc9QtIQ
            The Wayfarer;c_JU0ke5ZyY
            Lagoon;ClI6njdGJjE
            `
        },
        {
            title: "Once",
            data: `
            Dark chest of Wonders;E7uSU2Z62b0
            Wish I had an Angel;AD9WmPxTCiQ
            Nemo;xIOT6ZaSgrA
            Planet Hell;JtxyeVdSEms
            Creek Mary's Blood;_M_pooTwKro
            The Siren;HpNYDkkud7c
            Dead Gardens;ysPWgcCHR3U
            Romanticide;toC7G1n0e8w
            Ghost love Score;H_LYz2VyGEE
            Kuolema Tekee Taiteilijan;O8EuSKJalqI
            Higher than Hope;EkcRFT_qDVI
            White night Fantasy;EuWPAlawko0
            Live to Tell the Tale;Ms_pM1pxdik
            `
        },
        {
            title: "Dark Passion Play",
            data: `
            The Poet and the Pendulum;2bPi2ojKOmI
            Bye Bye Beautiful;hTdhXxxWREo
            Amaranth;GdZn7k5rZLQ
            Cadence of Her Last Breath;0Mxtab4bfQw
            Master Passion Greed;E1OANUnndlw
            Eva;EcsTNVc7b7U
            Sahara;veNhQ79Dbo4
            Whoever Brings the Night;f7-o3pHr4Wo
            For the Heart I Once Had;NeV3YQVW1io
            The Islander;--tFFz44zvc
            Last of the Wilds;X6Q3icWHXhU
            7 Days to the Wolves;BRW4heme3dY
            Meadows of Heaven;PIkC0ripKuw
            Escapist;eKuCFk1j_Io
            While Your Lips Are Still Red;Kmiw4FYTg2U
            `
        },
        {
            title: "Imaginaerum",
            data: `
            Taikatalvi;Adp6xNEt4T4
            Storytime;Us0Z6t70IXo
            Ghost River;sWzrsgJQ5d8
            Slow, Love, Slow;wbaqY2HD01k
            I Want My Tears Back;UIBXvvexSCI
            Scaretale;_f2E0I9i7Xg
            Arabesque;sVbhfbnIXYo
            Turn Loose The Mermaids;BR_WZZ4aIfU
            Rest Calm;fWD2YS_2Q-U
            The Crow, The Owl And The Dove;9hpf9-iggYY
            Last Ride Of The Day;tr-MYHCLmfo
            Song Of Myself;lAvOoxLJKqs
            Imaginaerum;Yk9CcGvj7NA
            The Heart Asks Pleasure First;4RVmGpImbdk
            `
        },
        {
            "title": "Endless Forms Most Beautiful",
            "data": `
            Shudder Before The Beautiful;JvgzGqAbHYE
            Weak Fantasy;IEsS6NNt3Bo
            Elan;micZX7Sl3Xc
            Yours Is An Empty Hope;ZZp9jp9k-mI
            Our decades in the sun;nKMWWO-eRHc
            My Walden;EsQbOLIAl2g
            Endless Forms Most Beautiful;ROQDbH1O5p4
            Edema Ruh;95YPVeV2sSM
            Alpenglow ;N2_ETb-63oo
            The Eyes Of Sharbat Gula;wGWmgBcd3nY
            The Greatest Show on Earth;n499M4pgc5o
            Sagan;1rT38pHbZl0
            `
        },
        {
            "title": "Human. :II: Nature.",
            "data": `
            Music;rwz7-h9LCDU
            Noise;r9dJtYxst-0
            Shoemaker;Rjp_DfvJimg
            Harvest;qSNChp1amRI
            Pan;bv5CAFlrNWE
            How's The Heart;tTdZD5uFjLs
            Procession;OZBpu67tbS0
            Tribal;s0bG2ce5blo
            Endlessness;DLFI7Cs7qmk
            All The Works...;RnOdQ5WNZJk
            `
        },
        {
            "title": "Yesterwynde",
            "data": `
            Yesterwynde;laJSKGHw1-g
            The Day Of...;v1RvxfwuuTk
            An Ocean Of Strange Islands;0hfx-2HY6ac
            The Antikythera Mechanism;U8-p9O-Rkao
            Perfume Of The Timeless;hQ2JhlA6TpU
            Sway;N_zysIBA5tg
            The Children Of 'Ata;aKxo0kCa-JM
            Something Whispered Follow Me;Mf6TuAQmsFQ
            Spider Silk;ArBJ3-sBH9E
            Hiraeth;s300U1eRgkE
            The Weave;f4LvrDnm0FQ
            Lanternlight;1Upr5yW4nAk
            `
        }
    ]
    ,
}


export const getAllVideoLinks = (slug: string): ParsedVideoLinkGroup[] => {
    const ret: ParsedVideoLinkGroup[] = [];
    const groups = videoLinks[slug];
    if (!groups) return ret;
    for (const group of groups) {
        const lines = group.data.split("\n");
        const parsedLines = lines.filter(line => !!line.trim()).map(line => {
            const parts = line.split(";");
            const id = parts[1].trim();
            return {
                title: parts[0].trim(),
                id,
                thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
            }
        });
        ret.push({
            title: group.title,
            links: parsedLines
        });
    }
    return ret;
}