import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ThemeDecorator from '../../../../.storybook/decorators/ThemeDecorator';

import { Hero, Headline, Title2, Title1, Subheading2, Subheading1, Body2, Body1, Caption } from '../index';

storiesOf('Typography', module)
    .addDecorator(ThemeDecorator)
    .add('Types', () => (
        <div>
            <Hero>Hero</Hero>
            <Headline>Headline</Headline>
            <Title2>Title2</Title2>
            <Title1>Title</Title1>
            <Subheading2>Subheading2</Subheading2>
            <Subheading1>Subheading1</Subheading1>
            <Body2>Body2</Body2>
            <Body1>Body1</Body1>
            <Caption>Caption</Caption>
        </div>
    ))
    .add('Transparency', () => (
        <div>
            <Body1>Primary</Body1>
            <Body1 secondary>Secondary</Body1>
            <Body1 hint>Hint</Body1>
            <Body1 disabled>Disabled</Body1>
        </div>
    ))
    .add('Example Text', () => (
        <div style={{ maxWidth: '72ch' }}>
            <Hero spacing>Example text from Samuel L. Ipsum</Hero>
            <Title1 spacing>I'm serious as a heart attack</Title1>
            <Body2 spacing>
                You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the
                world once and got a taste for murder. After the avalanche, it took us a week to climb out.
            </Body2>
            <Body1 spacing>
                Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name
                printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a
                mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy
                store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
            </Body1>
            <Title1 spacing>Is she dead, yes or no?</Title1>
            <Body1 spacing>
                Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most
                popular gun in American crime. Do you believe that shit? It actually says that in the little book that
                comes with it: the most popular gun in American crime. Like they're actually proud of that shit.
            </Body1>
            <Body1 spacing>
                Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you
                know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most
                times they're friends, like you and me! I should've known way back when... You know why, David? Because
                of the kids. They called me Mr Glass.{' '}
            </Body1>
        </div>
    ));
