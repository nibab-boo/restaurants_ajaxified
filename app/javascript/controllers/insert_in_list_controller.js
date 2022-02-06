import { csrfToken } from "@rails/ujs";
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ "items", "form", "size", "first" ]


  connect() {
    console.log(this.firstTarget);
  }
  send(event) {
    event.preventDefault();
    console.log('to do: send the request using ajax')

    fetch(this.formTarget.action, {
      method: 'POST',
      headers: { 'Accept': "application/json", 'X-CSRF-Token': csrfToken() },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.formTarget.outerHTML = data.form;
        if (data.inserted_item) {
          this.itemsTarget.insertAdjacentHTML('beforeend', data.inserted_item)
          this.firstTarget.outerHTML = ""
        }
        if (data.number_of_reviews) {
          this.sizeTarget.outerHTML = data.number_of_reviews;
        }
      });
  }
}