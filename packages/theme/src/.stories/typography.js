import * as React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import ThemeDecorator from '../../../../.storybook/decorators/ThemeDecorator';

import {
    Hero,
    Title1,
    Title2,
    Title3,
    Headline,
    Body,
    Callout,
    Subhead,
    Footnote,
    Caption1,
    Caption2,
    Overline,
    Text,
} from '../index';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    & > * {
        margin: 0.5rem 0;
    }
`;

storiesOf('Typography', module)
    .addDecorator(ThemeDecorator)
    .add('Types', () => (
        <Container>
            <Hero>Hero</Hero>
            <Title1>Title 1</Title1>
            <Title2>Title 2</Title2>
            <Title3>Title 3</Title3>
            <Headline>Headline</Headline>
            <Body>Body</Body>
            <Callout>Callout</Callout>
            <Subhead>Subhead</Subhead>
            <Footnote>Footnote</Footnote>
            <Caption1>Caption 1</Caption1>
            <Caption2>Caption 2</Caption2>
            <Overline>Overline</Overline>
        </Container>
    ))
    .add('Transparency', () => (
        <div>
            <Body>Primary</Body>
            <Body secondary>Secondary</Body>
            <Body hint>Hint</Body>
            <Body disabled>Disabled</Body>
        </div>
    ))
    .add('Example Text', () => (
        <Text maxWidth>
            <Hero spacing>Example text from Samuel L. Ipsum</Hero>
            <Title2 spacing>I'm serious as a heart attack</Title2>
            <Headline spacing>
                You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the
                world once and got a taste for murder. After the avalanche, it took us a week to climb out.
            </Headline>
            <Body spacing>
                Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name
                printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a
                mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy
                store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
            </Body>
            <Title2 spacing>Is she dead, yes or no?</Title2>
            <Body spacing>
                Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most
                popular gun in American crime. Do you believe that shit? It actually says that in the little book that
                comes with it: the most popular gun in American crime. Like they're actually proud of that shit.
            </Body>
            <Body spacing>
                Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you
                know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most
                times they're friends, like you and me! I should've known way back when... You know why, David? Because
                of the kids. They called me Mr Glass.{' '}
            </Body>
        </Text>
    ));
