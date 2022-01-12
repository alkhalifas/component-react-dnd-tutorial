import React, {Component} from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Example from './example'

export default class DNDList extends Component {
    render() {
        return (
            <DndProvider backend={HTML5Backend}>
                <Example />
            </DndProvider>
        )
    }
}
