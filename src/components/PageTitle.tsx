import { Title } from "solid-start";

export default function PageTitle(props) {

    return (
        <>
            <Title>{props.children}</Title>
        </>
    )
}
