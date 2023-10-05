import {Injectable} from '@angular/core';
import {Story} from "../model/Story";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class DatabaseHelperService {
  private _listOfStory: Story[]
  private _listOfUser: User[]

  constructor() {
    const dummyData = [
      {
        storyTitle: "Petualangan di Dunia Baru",
        storyDescription: "Sebuah kisah seru tentang petualangan di dunia fantasi yang penuh misteri.",
        storyThumbnail: "https://api.slingacademy.com/public/sample-photos/1.jpeg",
        storyGenre: "Fantasi",
        storyVisibility: "public",
        storyParagraph: [
          "Di suatu tempat yang jauh, ada sebuah kerajaan yang...",
          "Pahlawan kita, bernama Alex, memulai perjalanan...",
          "Ditemani oleh teman-teman setia, mereka menemui berbagai rintangan...",
          "Akankah mereka berhasil mengalahkan kegelapan dan menyelamatkan kerajaan?",
        ]
      },
      {
        storyTitle: "Misteri Hutan Terlarang",
        storyDescription: "Ketika sekelompok penjelajah memasuki hutan terlarang, mereka menemui misteri yang mengguncang iman mereka.",
        storyThumbnail: "https://api.slingacademy.com/public/sample-photos/2.jpeg",
        storyGenre: "Misteri",
        storyVisibility: "restricted",
        storyParagraph: [
          "Hutan terlarang selalu dihindari oleh penduduk desa...",
          "Namun, ketika rasa penasaran menggoda, sekelompok penjelajah memutuskan untuk memasuki hutan...",
          "Mereka menemui jejak-jejak aneh dan mendapati diri mereka terjebak dalam misteri kuno...",
          "Akankah mereka keluar dari hutan dengan selamat atau terperangkap selamanya?",
        ]
      },
      {
        storyTitle: "Kisah Cinta di Bawah Bintang",
        storyDescription: "Romansa yang indah berkembang di bawah langit berbintang, menguji cinta sejati mereka.",
        storyThumbnail: "https://api.slingacademy.com/public/sample-photos/3.jpeg",
        storyGenre: "Romansa",
        storyVisibility: "public",
        storyParagraph: [
          "Di malam yang indah, dua jiwa yang terpisah bertemu di bawah bintang-bintang...",
          "Mereka berbagi cerita, tawa, dan cinta yang tumbuh dengan setiap matahari terbenam...",
          "Namun, ujian dan cobaan mengancam untuk memisahkan mereka...",
          "Mampukah cinta mereka mengatasi segala rintangan?",
        ]
      },
      {
        storyTitle: "Petualangan Ruang Angkasa",
        storyDescription: "Sebuah kisah epik tentang penjelajahan ruang angkasa dan pertemuan dengan kehidupan luar angkasa.",
        storyThumbnail: "https://api.slingacademy.com/public/sample-photos/4.jpeg",
        storyGenre: "Sains Fiksi",
        storyVisibility: "public",
        storyParagraph: [
          "Para astronot meluncurkan misi penjelajahan ke luar angkasa yang belum pernah terjadi sebelumnya...",
          "Mereka menemukan planet baru, makhluk asing, dan misteri yang mengubah pandangan mereka terhadap alam semesta...",
          "Tetapi, apakah penemuan mereka akan membawa perdamaian atau kehancuran?",
        ]
      },
      {
        storyTitle: "Drama Keluarga: Rahasia yang Tersembunyi",
        storyDescription: "Dibalik tirai keluarga yang bahagia, tersembunyi rahasia kelam yang siap terungkap.",
        storyThumbnail: "https://api.slingacademy.com/public/sample-photos/5.jpeg",
        storyGenre: "Drama",
        storyVisibility: "restricted",
        storyParagraph: [
          "Keluarga yang tampak sempurna menyimpan rahasia yang sulit diungkapkan...",
          "Dengan kedatangan seseorang dari masa lalu, rahasia kelam itu mulai terungkap satu per satu...",
          "Bagaimana keluarga itu menghadapi kebenaran yang sulit?",
        ]
      }
    ]

    this._listOfUser = []
    this._listOfStory = []

    for (const item of dummyData) {
      const data = new Story();
      data.storyTitle = item.storyTitle
      data.storyThumbnail = item.storyThumbnail
      data.storyDescription = item.storyDescription
      data.storyVisibility = item.storyVisibility
      data.storyGenre = item.storyGenre
      data.storyParagraph.push(item.storyParagraph[0])
      this._listOfStory.push(
        data
      )
    }

    this._listOfUser.push(
      new User("Admin","admin123")
    )
  }


  get listOfStory(): Story[] {
    return this._listOfStory;
  }

  set listOfUser(value: User[]) {
    this._listOfUser = value;
  }
}
