/* import React from 'react';
 */ import { renderHook, act } from '@testing-library/react';
import { useLanguage } from './language.hooks';
import { LanguageProvider } from './language.context';

describe('useLanguage specs', () => {
  it('should return a message with language equals "en" when it renders the hook', () => {
    // Arrange
    /*  const provider = ({ children }) => {
      return <LanguageProvider>{children}</LanguageProvider>;
    }; */
    // Act
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    act(() => {
      result.current.setLanguage('en');
    });

    // Assert
    expect(result.current.message).toEqual('The current language is: en');
  });
});
