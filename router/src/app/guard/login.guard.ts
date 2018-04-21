import { CanActivate } from '@angular/router';

export class LoginGuard implements CanActivate {

    canActivate() {
        const loggedIn: boolean = Math.random() < 0.5;

        if (!loggedIn) {
            console.log('User isn\'t logged in');
        }

        return loggedIn;
    }
}
