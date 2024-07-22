import style from "./AvatarSection.module.css";

import Men1 from "../../avatar-images/men1.jpg";
import Men2 from "../../avatar-images/men2.jpg";
import Men3 from "../../avatar-images/men3.jpg";
import Men4 from "../../avatar-images/men4.jpg";
import Men5 from "../../avatar-images/men5.jpg";

import Girl1 from "../../avatar-images/girl1.jpg";
import Girl2 from "../../avatar-images/girl2.jpg";
import Girl3 from "../../avatar-images/girl3.jpg";
import Girl4 from "../../avatar-images/girl4.jpg";
import Girl5 from "../../avatar-images/girl5.jpg";
import Girl6 from "../../avatar-images/girl6.jpg";

export const AvatarSection = ({
  showAvatarContainerRef,
  setNewAvatarHandler,
}) => {
  function setAvatarImage(event) {

    if (event.target.tagName === "IMG") {
      let imgUrl = event.target.getAttribute("data-img-url");
      setNewAvatarHandler(imgUrl);
    } else if (event.target.tagName === "BUTTON") {
      showAvatarContainerRef.current.classList.add(style.hide);
      setTimeout(() => {
        showAvatarContainerRef.current.style.display = "none";
      }, 500); // Продължителността на анимацията е 0.5 секунди
    }
  }

  return (
    <article
      className={style["wrapper-avatar-container"]}
      onClick={setAvatarImage}
      ref={showAvatarContainerRef}
    >
      <div className={style["avatar-container"]}>
        <img
          data-img-url="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034122.jpg?t=st=1721426381~exp=1721429981~hmac=cfefb34a932207ebc58f35a581127b9d6b7529a915c6f4b8f5554dac8919d4b8&w=740"
          src={Men1}
          alt="Men1"
        />
        <img
          data-img-url="https://img.freepik.com/free-photo/portrait-young-businessman-with-mustache-glasses-3d-rendering_1142-51509.jpg?t=st=1721426240~exp=1721429840~hmac=c36779215eea8aace4823f4f687fc508fe2366d39229bd8588c44f7e1245d076&w=740"
          src={Men2}
          alt="Men2"
        />
        <img
          data-img-url="https://img.freepik.com/free-photo/portrait-handsome-hipster-man-glasses-3d-rendering_1142-51612.jpg?t=st=1721426046~exp=1721429646~hmac=7add9372407fc45274b391f1084f07f688acb3a8306c017f9cbed729548fcdda&w=740"
          src={Men3}
          alt="Men3"
        />
        <img
          data-img-url="https://img.freepik.com/free-photo/3d-rendering-male-robot-wearing-cap-sunglasses_1142-58088.jpg?t=st=1721424114~exp=1721427714~hmac=dac5e65fc8f60a8f44fcb7f12e01a4261431f57c82db13af6f6d631d29069495&w=740"
          src={Men4}
          alt="Men4"
        />
        <img
          data-img-url="https://img.freepik.com/free-photo/3d-rendering-teenager-boy-with-backpack-city_1142-55311.jpg?t=st=1721428345~exp=1721431945~hmac=c54dd79df751d82d1d5eabc3f3b09bf5a2d1319aef99e562704592853d726032&w=740"
          src={Men5}
          alt="Men4"
        />

        <img
          data-img-url="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-stylish-hairstyle-glasses_1142-40217.jpg?t=st=1721429621~exp=1721433221~hmac=52ba8a4295dccae1a7963e3a91409d91a81e0035f17efb485157f781d0fb774b&w=740"
          src={Girl1}
          alt="Girl1"
        />
        <img
          data-img-url="https://img.freepik.com/free-photo/portrait-young-woman-wearing-glasses-3d-rendering_1142-43632.jpg?t=st=1721427026~exp=1721430626~hmac=10cd69fd7ff1fcad3017d194eb40bb3c2ec5864cf1e8c107fa4d9ff90675f09b&w=740"
          src={Girl2}
          alt="Girl2"
        />
        <img
          data-img-url="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?t=st=1721425939~exp=1721429539~hmac=7090451e5055c29f5c243248c3144b1b50d0dbf7e17397b76e826f9e21f98ba3&w=740"
          src={Girl6}
          alt="Girl6"
        />
        <img
          data-img-url="https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-girl-blue-jacket-glasses_1142-41044.jpg?t=st=1721426726~exp=1721430326~hmac=8132021b1564439fdfef722edbc822ebab88002b73eccc8169328a004efc8d33&w=740"
          src={Girl4}
          alt="Girl4"
        />
        <img
          data-img-url="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033969.jpg?t=st=1721426935~exp=1721430535~hmac=495fd0fca3e5092a736beb6e11b61287542ba3f327e6c9cdbba5e9b00a1e0463&w=740"
          src={Girl5}
          alt="Girl5"
        />

        <img
          data-img-url="https://img.freepik.com/free-photo/cute-girl-with-blond-hair-blue-eyes-3d-rendering_1142-51238.jpg?t=st=1721426423~exp=1721430023~hmac=997e74636035954efa53b362c297163fad0b6233a1c4830e17eaa8ca464966e2&w=740"
          src={Girl3}
          alt="Girl3"
        />
      </div>

      <button className={style["hide-section-button"]}>Hide Section</button>
    </article>
  );
};
