import React from 'react';
import Heading from '../../../components/UI/Typography/Heading/Heading';
import Paragraph from '../../../components/UI/Typography/Paragraph/Paragraph';
import PanelTitle from '../../../components/Panel/PanelTitle/PanelTitle';
import PanelRow from '../../../components/Panel/PanelRow/PanelRow';
import PanelRowLeft from '../../../components/Panel/PanelRow/PanelRowLeft/PanelRowLeft';
import PanelRowRight from '../../../components/Panel/PanelRow/PanelRowRight/PanelRowRight';

const AccountProfile: React.FC = () => {
    return (
        <>
            <PanelTitle>Ustawienia profilu:</PanelTitle>
            <PanelRow>
                <PanelRowLeft>
                    <Heading tag="p" type="secondary" mod="secondary">
                        Imię i nazwisko
                    </Heading>
                    <Paragraph>Imię i nazwisko wyświetlane jest w każdej Twojej ofercie</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>Test</PanelRowRight>
            </PanelRow>
            <PanelRow>
                <PanelRowLeft>
                    <Heading tag="p" type="secondary" mod="secondary">
                        Numer telefonu
                    </Heading>
                    <Paragraph>Numer telefonu wyświetlany jest w każdej Twojej ofercie</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>Test</PanelRowRight>
            </PanelRow>
            <PanelRow>
                <PanelRowLeft>
                    <Heading tag="p" type="secondary" mod="secondary">
                        Adress e-mail
                    </Heading>
                    <Paragraph>Adress e-mail wyświetlany jest w każdej Twojej ofercie</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>Test</PanelRowRight>
            </PanelRow>
            <PanelRow>
                <PanelRowLeft>
                    <Heading tag="p" type="secondary" mod="secondary">
                        Miejscowość
                    </Heading>
                    <Paragraph>Lokalizacja pomoże z odnalezieni odpowiedniej oferty</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>Test</PanelRowRight>
            </PanelRow>
            <PanelRow>
                <PanelRowLeft>
                    <Heading tag="p" type="secondary" mod="secondary">
                        Portale społecznościowe
                    </Heading>
                    <Paragraph>Podanie profilu społecznościowego może ułątwić kontakt</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>Test</PanelRowRight>
            </PanelRow>
            Buttons
        </>
    );
};

export default AccountProfile;
