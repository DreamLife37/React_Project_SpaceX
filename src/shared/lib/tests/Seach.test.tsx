import {render, screen} from "@testing-library/react";
import {Search} from "../../ui/search/Search";
import userEvent from "@testing-library/user-event";

const onChange = jest.fn()

describe('Search component', () => {
    it('Search renders', () => {
        render(<Search label={'Test'} onChange={onChange} currentValue={'Test'}/>)
        expect(screen.getByRole("textbox")).toBeInTheDocument()
        expect(screen.getByText('Test')).toBeInTheDocument()
    })
    it('Search snapshot', () => {
        expect(render(<Search label={'Test'} onChange={onChange}
                              currentValue={'Test'}/>)).toMatchSnapshot()
    })

    it('Search snapshot value empty string', () => {
        expect(render(<Search label={'Test'} onChange={onChange}
                              currentValue={''}/>)).toMatchSnapshot()
    })

    it('onChange in Search work', () => {
        render(<Search label={'Test'} onChange={onChange}
                       currentValue={'Test'}/>)
        userEvent.type(screen.getByRole('textbox'), 'Test input')
        expect(onChange).toHaveBeenCalledTimes(10)
    })
})