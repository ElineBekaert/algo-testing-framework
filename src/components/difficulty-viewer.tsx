import React from 'react';
import './difficulty-viewer.scss';
import { difficulty } from '../difficulty';
import { repeat } from 'js-algorithms';


export interface IProps
{
    difficulty : difficulty | null;
}

export interface IState
{

}

export class DifficultyViewer extends React.Component<IProps, IState>
{
    constructor(props : IProps)
    {
        super(props);
    }

    public render()
    {
        const star = String.fromCharCode(0x2605);
        const difficulty : number = this.props.difficulty || 0;
        const difficultyString = repeat(difficulty, star);

        return (
            <span className="difficulty-viewer">
                {difficultyString}
            </span>
        );
    }
}