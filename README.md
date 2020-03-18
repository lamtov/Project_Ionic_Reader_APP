-- Khi push code
- git add .
- git reset -- src/assets www
- git commit -m "DCM ANH EM"
- git push

-- Tk đăng nhập
- meag.nz
    -  tk: tovanlam01111995@gmail.com
    - mk: tovanlam20132223
- ionic view:
    - tk: tovanlam20132223@gmail.com
    - mk: tovanlam201322223

-- Web hay dùng
- ionic 2: http://ionicframework.com/docs/
    - ionic slides: http://ionicframework.com/docs/v2/components/#slides
    - ionic item: http://ionicframework.com/docs/v2/components/#fabs
    - ionic nav__life cycle: http://ionicframework.com/docs/v2/components/#navigation
- angular2: https://angular.io/
    - animation: https://angular.io/docs/ts/latest/guide/animations.html
    - http: https://angular.io/docs/ts/latest/guide/server-communication.html

-- Resource
- ionic template: https://github.com/driftyco
- animation code: https://github.com/yuyang041060120/ng2-animate
- item: http://all-free-download.com/
- css tool: 
    - border and Shadow: http://www.cssmatic.com/
    - create Logo: https://cooltext.com/Fonts-Kids
    - text Css: http://csstypeset.com/
-- Data
- video: https://drive.google.com/file/d/0B-DQhL8YjxJSV1hsRkZyQjVqYkU/view?usp=sharing
- image: https://drive.google.com/file/d/0B-DQhL8YjxJSQ2c4alh0QjhqOUE/view?usp=sharing
- sound: https://drive.google.com/file/d/0B-DQhL8YjxJSSVo3TmVwbGdDYU0/view?usp=sharing


======================================================================================= KHICode
0. https://scotch.io/tutorials/build-a-mobile-app-with-angular-2-and-ionic-2
1.  ionic start githubIonic tutorial --v2
2. Ta chỉnh sửa file trong app.component.ts để thêm các trang vào phần menu slide

3. Thêm vào app.module.ts để khai báo cho các component
-- Co 2 cach de tao va chuyen 1 trang moi
- Su dung truc tiep tai menu ben trai
      - B1: ionic g page namePage
      - B2: Them page vao trong phan app.module.ts
      - B3: Them vao trong

    - this.pages = [
     { title: 'Users', component: UsersPage },
     { title: 'Repos', component: ReposPage },
     { title: 'Organisations', component: OrganisationsPage},
     {title:'SlicePage', component:SlicePage}
    ];
 - Su dung Nav chuyen trang
    - goToDetails(login:string){
    - this.navCtrl.push(UserDetailsPage,{login}); //Lam cach nay thi co phan back
    - this.navCtrl.setRoot(UserDetailsPage) //Lam cach nay thi co menu
    - }
4. Thêm model
    - 1. Tạo models/user.ts
    - 2. ionic g provider github-users // Tao một folder tên providers và thêm github-users.ts
        - Tu models ta quy dinh du lieu
        - Tu provider ta set ham lay du lieu
        - Khi mot class muon su dung phai goi thong qua provider
        - No lam cho code sang hon
    - 3. Cac buoc o tren la cach su dung cua service
5. Sử dụng ion-list
     - http://ionicframework.com/docs/v2/api/components/item/Item/
      - <ion-list> //Tao list
        <button ion-item *ngFor="let user of users"> //Su dung de bam 1 cai ca lu dc
          <ion-avatar item-left> //item-left cho no luc nao cung o ben trai
            <img [src]="user.avatar_url">
          </ion-avatar>
          <h2>{{user.login}}</h2>
          <ion-icon name="arrow-forward" item-right=""></ion-icon> //item-right cho no luc nao cung o ben phai
        </button>
      </ion-list>

6. Chuyen trang va truyen du lieu ta dung nav
7. De anh va moi thu o trong asset nhu vay lay link se chuan luon


8.Play Audio
      this.audio.src = item.slide_sound;
        this.audio.load();
        this.audio.play();


9. Make ionic fell natives



