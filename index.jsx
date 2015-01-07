'use strict';

require('./index.styl')

var React = require('react')
var Menu  = require('./src')

var items = []

var i = 0
var len = 30

for (; i< len; i++){
    items.push({
        label: 'item ' + (i + 1),
        items: [
            {
                label: i
            }
        ]
    })
}

var App = React.createClass({

    handleItemClick: function() {
        console.log('item click', arguments)
    },

    render: function() {
        //     <Menu.Item>
        //         <Menu.Item.Cell>hello</Menu.Item.Cell>
        //     </Menu.Item>

        //     <Menu.Item>
        //         <Menu.Item.Cell>hi</Menu.Item.Cell>
        //     </Menu.Item>
        // </Menu>

                // <Menu visible={true} onClick={this.handleClick} columns={['icon','label']} items={items} />

        <Menu cellStyle={{padding: 10 }} at={[100, 100]}>
            <Menu.Item onClick={this.handleItemClick}>
                <Menu.Item.Cell>first</Menu.Item.Cell>
                <Menu>
                    <Menu.Item onClick={this.handleItemClick}>
                        <Menu.Item.Cell>first</Menu.Item.Cell>
                    </Menu.Item>
                </Menu>
            </Menu.Item>

            <Menu.Separator />
            <Menu.Item onClick={this.handleItemClick} label={1}>
                <Menu>
                    <Menu.Item onClick={this.handleItemClick}>
                        <Menu.Item.Cell>one</Menu.Item.Cell>
                    </Menu.Item>
                    <Menu.Item onClick={this.handleItemClick}>
                        <Menu.Item.Cell>two</Menu.Item.Cell>

                        <Menu>
                            <Menu.Item onClick={this.handleItemClick}>
                                <Menu.Item.Cell>one</Menu.Item.Cell>
                            </Menu.Item>
                            <Menu.Item onClick={this.handleItemClick}>
                                <Menu.Item.Cell>two</Menu.Item.Cell>
                            </Menu.Item>
                            <Menu.Item onClick={this.handleItemClick}>
                                <Menu>
                                    <Menu.Item onClick={this.handleItemClick}>
                                        <Menu.Item.Cell>one</Menu.Item.Cell>
                                    </Menu.Item>
                                    <Menu.Item onClick={this.handleItemClick}>
                                        <Menu.Item.Cell>two</Menu.Item.Cell>
                                    </Menu.Item>
                                    <Menu.Item onClick={this.handleItemClick}>
                                        <Menu.Item.Cell>three</Menu.Item.Cell>
                                    </Menu.Item>
                                </Menu>
                                <Menu.Item.Cell>three</Menu.Item.Cell>
                            </Menu.Item>
                        </Menu>
                    </Menu.Item>
                    <Menu.Item onClick={this.handleItemClick}>
                        <Menu.Item.Cell>three</Menu.Item.Cell>

                        <Menu>
                            <Menu.Item onClick={this.handleItemClick}>
                                <Menu.Item.Cell>3. one</Menu.Item.Cell>
                            </Menu.Item>
                            <Menu.Item onClick={this.handleItemClick}>
                                <Menu.Item.Cell>3. two</Menu.Item.Cell>
                            </Menu.Item>
                            <Menu.Item onClick={this.handleItemClick}>
                                <Menu.Item.Cell>3. three</Menu.Item.Cell>
                            </Menu.Item>
                        </Menu>
                    </Menu.Item>
                </Menu>

                <Menu.Item.Cell>one</Menu.Item.Cell>
                <Menu.Item.Cell>icon</Menu.Item.Cell>
            </Menu.Item>

            <Menu.Item onClick={this.handleItemClick} label={2}>
                                        <Menu.Item.Cell>two</Menu.Item.Cell>
                <Menu.Item.Cell>icon</Menu.Item.Cell>
                <Menu>
                    <Menu.Item onClick={this.handleItemClick}>
                        <Menu.Item.Cell>first in submenu</Menu.Item.Cell>
                    </Menu.Item>
                </Menu>
            </Menu.Item>
            <Menu.Item label={3}>
                <Menu.Item.Cell>three </Menu.Item.Cell>
                <Menu>
                    <Menu.Item>
                        <Menu.Item.Cell>hello</Menu.Item.Cell>
                    </Menu.Item>
                </Menu>
            </Menu.Item>
        </Menu>

        return (
            <div>
                <Menu maxHeight={300} items={items}  at={[100, 100]}/>

            </div>

        )
    },

    handleClick: function(itemProps) {
        console.log('clicked ', arguments)
    }
})

React.render(<App />, document.getElementById('content'))