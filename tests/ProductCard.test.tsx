import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCard } from '../src/components/ProductCard'
import '@testing-library/jest-dom'

describe('ProductCard', () => {
  const mockProps = {
    title: 'Test Product',
    description: 'Test Description',
    heroImage: '/test.jpg',
    price: 99.99,
    category: 'Test Category'
  }

  it('renders product information correctly', () => {
    render(<ProductCard {...mockProps} />)
    
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()
    expect(screen.getByText(`$${mockProps.price}`)).toBeInTheDocument()
    expect(screen.getByText(mockProps.category)).toBeInTheDocument()
  })
}) 