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
  }

  render({ type, price}) {
    const template = `
<div class="notification type-pepperoni">
  <button class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${price}</span>) has been added to your order.
</div>
    `;

  this.container.innerHTML = template;
  
  let button = this.container.querySelector(".delete");
  button.addEventListener("click", () => this.onDelete()); 
  }

  onDelete(){
    this.container.remove();
  }
}
