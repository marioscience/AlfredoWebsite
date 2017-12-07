import {Component} from "@angular/core";

@Component({
  selector: "admin",
  template: `
    <h1>Admin</h1>
    <p class="mat-body">You are now in admin territory</p>

    <h2>Working on Login/Register workflows</h2>
    <h1>You can only see this page when LOGGED IN. Otherwise there's something wrong. </h1>

    <table>
      <th>
        Current User:
      </th>
      <td>
        User Goes Here
      </td>
    </table>
  `
})
export class AdminComponent {
}
