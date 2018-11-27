import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123456'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123456'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123456', { note: 'New note' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123456',
        updates: {
            note: 'New note'
        } 
    })
})

test('should setup addExpense action object with provided values', () => {
    const expenseData = {
        description: 'New expense', 
        note: 'New note', 
        amount: 50, 
        createdAt: 150000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup addExpense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    })
})