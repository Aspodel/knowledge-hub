import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import Button from "../Button";
import { DEFAULT_PROFFILE_IMG_URL } from "../../utils/constants";
import Icon from "../Icon";
import { Bell, ChatAlt, DotsHorizontal } from "@styled-icons/heroicons-outline";

function Headerbar() {
  return (
    <div className="header-bar">
      <div className="search">
        <input type="search" placeholder="Type to search" />
        {/* <div className="search__body">Body search</div> */}
      </div>

      <div className="control">
        <Link to="/">
          <Button>Create</Button>
        </Link>
        {/* <Link to="/">
          <Icon icon={ChatAlt} size={34} />
        </Link> */}

        <div className="control__item">
          <Button variant="text">
            <Icon icon={ChatAlt} size={28} />
          </Button>

          <div className="dropdown">
            <div className="dropdown__header">
              <div className="dropdown__title h4">Message</div>
              <div className="action">
                <Button variant="text">
                  <Icon icon={DotsHorizontal}></Icon>
                </Button>
              </div>
            </div>

            <div className="dropdown__body">
              <Link className="dropdown__message dropdown__message--new" to="/">
                <Avatar imgSrc={DEFAULT_PROFFILE_IMG_URL} />
                <div className="dropdown__detail">
                  <div className="dropdown__line">
                    <div className="dropdown__username">Cedric Diggory</div>
                    <div className="dropdown__time">3:34 PM</div>
                  </div>
                  <div className="dropdown__content">When do</div>
                </div>
              </Link>

              <Link className="dropdown__message" to="/new-blog">
                <Avatar imgSrc={DEFAULT_PROFFILE_IMG_URL} />
                <div className="dropdown__detail">
                  <div className="dropdown__line">
                    <div className="dropdown__username">Cedric Diggory</div>
                    <div className="dropdown__time">3:34 PM</div>
                  </div>
                  <div className="dropdown__content">
                    When do you release the code
                  </div>
                </div>
              </Link>

              <Link to="/" className="dropdown__button">
                <Button>View in message center</Button>
              </Link>
            </div>
          </div>
        </div>

        <Link to="/">
          <Icon icon={Bell} size={28} />
        </Link>
        <Link to="/">
          <Avatar imgSrc={DEFAULT_PROFFILE_IMG_URL} />
        </Link>
      </div>
    </div>
  );
}

export default Headerbar;
