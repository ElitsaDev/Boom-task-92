import EventEmitter from "eventemitter3";
import Card from "./Card";
import Notification from "./Notification";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    const pizzas = [
      {
        type: Card.types.HAWAIIAN,
        price: 8.99,
        emoji: '🍕',
      },
      {
        type: Card.types.PEPPERONI,
        price: 9.99,
        emoji: '🍕',
      },
      {
        type: Card.types.MARGHERITA,
        price: 7.99,
        emoji: '🍕',
      },
    ];

    pizzas.forEach((pizza) => {
      const card = new Card({ ...pizza });
      card.render();
      card.addListener(Card.events.ADD_TO_CART,  () => {
        let notification = new Notification();
        notification.render(pizza);
      });
      document.querySelector(".main").appendChild(card.container);
    });

    this.emit(Application.events.READY);
  }
}
