import { formatCurrency } from "./utils.js";
export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
    this.notificationDiv = document.querySelector(".notifications");
  }

  render({ type, price, emoji}) {
    const template = `
<div class="notification type-pepperoni">
  <button class="delete"></button>
  ${emoji} <span class="type">${type}</span> (<span class="price">${ formatCurrency(price) }</span>) has been added to your order.
</div>
    `;

  this.container.innerHTML = template;
  this.notificationDiv.appendChild(this.container);

  let button = this.container.querySelector(".delete");
  button.addEventListener("click", () => this.onDelete()); 
  }

  onDelete(){
    this.container.remove();
  }
}
