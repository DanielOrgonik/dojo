import React, {Component} from "react";
import next from "./gol.js";
import Button from "./Button";
import "./App.css";
import Table from "./Table";

class componentName extends React.Component {
    constructor() {
        super()
        this.state = {
            input:
                [
                    [0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 1, 0, 0, 0, 1, 1],
                    [0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
                    [0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
                    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                    [1, 1, 0, 0, 1, 0, 1, 0, 1, 1],
                    [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
                    [0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
                    [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
                    [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
                ]
        }

        this.initialState = this.state.input
        this.nextBoard = this.nextBoard.bind(this);
        this.resetTable = this.resetTable.bind(this);
        this.autoTable = this.autoTable.bind(this);
        this.stopAutoTable = this.stopAutoTable.bind(this);
    }

    inter = () => {
        setInterval(next, 500);
    }

    resetTable() {
        this.setState(prevState => {
            return {
                input: this.initialState
            }
        })
    }

    nextBoard() {
        this.setState(prevState => {
            return {
                input: next(this.state.input)
            }
        })
    }

    autoTable() {
       this.myInterval = setInterval(() => this.setState(prevState => {
            return {
                input: next(this.state.input)
            }
        }), 500);
    }

    stopAutoTable() {
        clearInterval(this.myInterval)
    }
    renderTable = () => {
        const newTable = this.state.input.map(row =>
            <tr>
            {row.map(el => {
                if (el === 1) {
                    return <td style={{backgroundColor: "black"}} />;
                } else {
                    return <td style={{ backgroundColor: "white"}} />;
                }})
    }
    </tr>
    );
        return newTable;
    };


    render() {
        return (
            <div>
            <h1>Game of Life</h1>
        <Button onClick={this.resetTable}>Clear Board</Button>
        <Button onClick={this.nextBoard}>Next Board</Button>
        <Button onClick={this.autoTable}>Auto Play</Button>
        <Button onClick={this.stopAutoTable}>Stop Play</Button>

        <Table>
        <tbody>{this.renderTable()}</tbody>
        </Table>
        </div>
    );
    }
}

export default componentName;

