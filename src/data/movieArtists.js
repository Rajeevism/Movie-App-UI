import Soori from "../assets/soori.avif";
import Sasikumar from "../assets/sasikumar.avif";
import UnniMukundan from "../assets/unni-mukundan.avif";
import Samuthirakani from "../assets/samuthirakani.avif";
import MimeGopi from "../assets/mime-gopi.avif";
import Vadivukkarasi from "../assets/vadivukkarasi.avif";
import HiphopAdhi from "../assets/hiphopadhi.avif";
import Kashmira from "../assets/kashmira.avif";
import Anikha from "../assets/anikha-surendran.avif";
import Bhagyaraj from "../assets/k-bhagyaraj.avif";
import Prabhu from "../assets/prabhu.avif";
import Munishkanth from "../assets/munishkanth.avif";
import Thiagarajan from "../assets/thiagarajan.avif";
import Pandiarajan from "../assets/pandiarajan.avif";
import Devadarshini from "../assets/devadarshini.avif";
import SenthilKuamr from "../assets/r-s-durai-senthilkumar.avif";
import Vetrimaran from "../assets/vetrimaaran.avif";
import YuvanShankarRaja from "../assets/yuvan-shankar-raja.avif";
import ArthurWilson from "../assets/arthur-wilson.avif";
import Karthik from "../assets/karthik-venugopal.avif";
import Prasanna from "../assets/prasanna.avif";
import Nayak from "../assets/tapas-nayak.avif";

export const artistDetails = [
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
  let artists = artistDetails.filter((data) => data.id == id);
  console.log("artists:", artists);
  return artists.length > 0 ? artists[0] : undefined;
}