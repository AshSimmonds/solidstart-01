import styles from "./H2-green.module.css"

export function H2Green(props) {
    return (

        <div class={styles.h2}>
            {props.children}
        </div>

    )
}
