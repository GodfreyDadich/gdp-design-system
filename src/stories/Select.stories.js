import React from 'react'
import { text, boolean, number, array, color, select } from '@storybook/addon-knobs'
import Select from '../components/Select'
import SelectNative from '../components/SelectNative'

export default {
  title: 'Design System|Select'
}

export const StyledNative = () =>
  <SelectNative
    selectFont={select('Font', ['sans-serif', 'serif'], 'sans-serif')}
    backgroundColor={color('Background Color', '#fff', 'Colors')}
    placeholder={text('Placeholder', 'Options', 'content')}
    options={array('Options', ['option1', 'option2', 'option3'], ',', 'content')}
    selectPadding={number('Padding', 5)}
    textColor={color('Text Color', '#000', 'Colors')}
    borderWidth={number('Border Width', 1)}
    borderColor={color('Border Color', '#000', 'Colors')}
    fontSize={number('Font Size', 12)}
    selectIcon={select('Icon', ['triangle', 'caret', 'chevron'], 'triangle')}
    disabled={boolean('Disabled', false)}
    borderRadius={number('Rounded Corners', 0, { range: true, min: 0, max: 30, step: 1 })}
  />

export const StyledCustom = () =>
  <Select
    selectFont={select('Font', ['sans-serif', 'serif'], 'sans-serif')}
    backgroundColor={color('Background Color', '#fff', 'Colors')}
    placeholder={text('Placeholder', 'Options', 'content')}
    options={array('Options', ['option1', 'option2', 'option3'], ',', 'content')}
    selectPadding={number('Padding', 5)}
    textColor={color('Text Color', '#000', 'Colors')}
    borderWidth={number('Border Width', 1)}
    borderColor={color('Border Color', '#000', 'Colors')}
    fontSize={number('Font Size', 12)}
    selectIcon={select('Icon', ['triangle', 'caret', 'chevron'], 'triangle')}
    disabled={boolean('Disabled', false)}
    borderRadius={number('Rounded Corners', 0, { range: true, min: 0, max: 30, step: 1 })}
  />
