import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'aatr_2MstrI', song: 'Clean Bandit - Symphony (feat. Zara Larsson) [Official Video]'},
    {id: 'HM2nQ9wMwHo', song: '[Vietsub+Lyric] 𝑳𝒆𝒚𝒍𝒂 - 𝑴𝒆𝒔𝒕𝒐'},
    {id: 'oWSlQQKZ4IY', song: 'Dăm ba cách HACK SẬP một trang web - Hack cùng Code Dạo'},
    {id: 'f0bbDFRYD_A', song: 'XXXTENTACION - changes'},
    {id: '4dUxiMfO9Ys', song: 'Avicii greatest Hits Full Album 2020 - Best Songs Of Avicii\n'}
  ];
  constructor() { }
  // tslint:disable-next-line:typedef
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
