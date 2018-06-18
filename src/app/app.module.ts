import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";
import { Stripe } from '@ionic-native/stripe';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetPage } from '../pages/reset/reset';
import { ProfilePage } from '../pages/profile/profile'
import { ExplorePage } from '../pages/explore/explore';
import { AccountPage } from '../pages/account/account';
import { BrowsePage } from '../pages/browse/browse';
import { TabsPage } from '../pages/tabs/tabs';
import { CharityPage } from '../pages/charity_page/charity_page';
import { DonatePage } from '../pages/donate/donate';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ResetPage,
    ProfilePage,
    ExplorePage,
    AccountPage,
    BrowsePage,
    TabsPage,
    CharityPage,
    DonatePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ResetPage,
    ProfilePage,
    ExplorePage,
    AccountPage,
    BrowsePage,
    TabsPage,
    CharityPage,
    DonatePage
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    Stripe,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
