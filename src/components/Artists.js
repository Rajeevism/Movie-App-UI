import Soori from "../assests/soori.avif";
import Sasikumar from "../assests/sasikumar.avif";
import UnniMukundan from "../assests/unni-mukundan.avif";
import Samuthirakani from "../assests/samuthirakani.avif";
import MimeGopi from "../assests/mime-gopi.avif";
import Vadivukkarasi from "../assests/vadivukkarasi.avif";
import HiphopAdhi from "../assests/hiphopadhi.avif";
import Kashmira from "../assests/kashmira.avif";
import Anikha from "../assests/anikha-surendran.avif";
import Bhagyaraj from "../assests/k-bhagyaraj.avif";
import Prabhu from "../assests/prabhu.avif";
import Munishkanth from "../assests/munishkanth.avif";
import Thiagarajan from "../assests/thiagarajan.avif";
import Pandiarajan from "../assests/pandiarajan.avif";
import Devadarshini from "../assests/devadarshini.avif";
import SenthilKuamr from "../assests/r-s-durai-senthilkumar.avif";
import Vetrimaran from "../assests/vetrimaaran.avif";
import YuvanShankarRaja from "../assests/yuvan-shankar-raja.avif";
import ArthurWilson from "../assests/arthur-wilson.avif";
import Karthik from "../assests/karthik-venugopal.avif";
import Prasanna from "../assests/prasanna.avif";
import Nayak from "../assests/tapas-nayak.avif";
export const ArtistDetails = [
  {
    id: 1,
    castMembers: [
      {
        image: Soori,
        name: "Soori",
        role: "Actor",
      },
      {
        image: Sasikumar,
        name: "Sasikumar",
        role: "Actor",
      },
      {
        image: UnniMukundan,
        name: "Unni Mukundan",
        role: "Actor",
      },
      {
        image: Samuthirakani,
        name: "Samuthirakani",
        role: "Actor",
      },
      {
        image: MimeGopi,
        name: "Mime Gopi",
        role: "Actor",
      },
      {
        image: Vadivukkarasi,
        name: "Vadivukkarasi",
        role: "Actress",
      },
    ],
    crewMembers: [
      {
        image: SenthilKuamr,
        name: "R.S.Durai SenthilKumar",
        role: "Director, Writer",
      },
      {
        image: Vetrimaran,
        name: "Vetrimaran",
        role: "Writer",
      },
      {
        image: YuvanShankarRaja,
        name: "Yuvan Shankar Raja",
        role: "Music Composer",
      },
      {
        image: ArthurWilson,
        name: "Arthur Wilson",
        role: "Cinematographer",
      },
    ],
  },
  {
    id: 2,
    castMembers: [
      {
        image: HiphopAdhi,
        name: "Hiphop Adhi",
        role: "Actor",
      },
      {
        image: Kashmira,
        name: "Kashmira Pardeshi",
        role: "Actress",
      },
      {
        image: Anikha,
        name: "Anikha Surendran",
        role: "Actress",
      },
      {
        image: Munishkanth,
        name: "Munishkanth",
        role: "Actor",
      },
      {
        image: Bhagyaraj,
        name: "K Bhagyaraj",
        role: "Actor",
      },
      {
        image: Prabhu,
        name: "Prabhu",
        role: "Actor",
      },
      {
        image: Pandiarajan,
        name: "Pandiarajan",
        role: "Actor",
      },
      {
        image: Thiagarajan,
        name: "Thiagarajan",
        role: "Actor",
      },
      {
        image: Devadarshini,
        name: "Devadarshini",
        role: "Actress",
      },
    ],
    crewMembers: [
      {
        image: Karthik,
        name: "Karthik Venugopalan",
        role: "Director , Writer",
      },
      {
        image: HiphopAdhi,
        name: "Hiphop Adhi",
        role: "Music Composer",
      },
      {
        image: Prasanna,
        name: "Prasanna",
        role: "Editor",
      },
      {
        image: Nayak,
        name: "Tapas Nayak",
        role: "Sound Designer",
      },
    ],
  },
];

export function getArtistsByMovieId(id) {
  console.log("Get the Artists by movie  id: ", id);
  let artists = ArtistDetails.filter((data) => data.id == id);
  console.log("artists:", artists);
  return artists.length > 0 ? artists[0] : undefined;
}
