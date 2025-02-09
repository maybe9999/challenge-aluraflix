import { Outlet } from "react-router-dom";
import {
    Header,
    H1TitleHeader,
    DivConteinerLink,
    LinkStyledHeader,
    FooterContaierStyled
} from './BasePage.styled.jsx';
import { useVideoContext } from '../../Contexts/VideoProvider';

export const BasePage = () => {
    const { pageActive } = useVideoContext()
    return <>
        <Header>
            <H1TitleHeader> LEARNFLIX </H1TitleHeader>
            <DivConteinerLink>
                <LinkStyledHeader to="/" isSelect={pageActive.root[1]}> HOME </LinkStyledHeader>
                <LinkStyledHeader to="/new-video" isSelect={pageActive.newVideo[1]}>  NUEVO VIDEO </LinkStyledHeader>
            </DivConteinerLink>
        </Header>

        <Outlet />

        <FooterContaierStyled>
            <H1TitleHeader> LEARNFLIX </H1TitleHeader>
        </FooterContaierStyled>
    </>
}