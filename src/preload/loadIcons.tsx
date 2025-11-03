import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faKey,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export async function loadIcons() {
    library.add(faUser, faKey, faEye, faEyeSlash);
}