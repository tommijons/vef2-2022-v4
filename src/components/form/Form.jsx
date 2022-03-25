import { Link } from "react-router-dom";
import { Button} from "../button/Button";
import s from './Form.module.scss';

export function Form() {

    return (
        <section>
        <h1>Innskráning</h1>

        <form class={s.form}>
          <div class={s.field}>
            <label for="username">Notendanafn</label>
            <input type="text" name="username" id="username"/>
          </div>
          <div class={s.field}>
            <label for="password">Lykilorð</label>
            <input type="password" name="password" id="password"/>
          </div>

            <Button>Skrá inn</Button>
          </form>
          <Link to={-1}>
            <p>Til baka</p>
          </Link>
        </section>
      );
}