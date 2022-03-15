import * as chai from 'chai'
import { Form } from '../src/Form'

const expect = chai.expect;

describe('My Formgen element', () => {
  it('can create an empty form', () => {
    let form = new Form({ id: 'form01' })

    form.render().then(data => {
      expect(data)
        .to
        .equal('<form method="POST" action="." id="form01"></form>');
    })
  })
})