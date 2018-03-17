import { Injectable } from '@angular/core';
import { S2Option } from 'rselect2';
import { Observable } from 'rxjs/Observable';
import {ImageEntity} from '../model/image.model';

@Injectable()
export class DataService {

    getDynamicList(): Observable<Array<S2Option>> {
        return Observable.create((obs) => {
            obs.next([
                {
                    id: 'dyn1',
                    text: 'Dynamic 1'
                },
                {
                    id: 'dyn2',
                    text: 'Dynamic 2'
                },
                {
                    id: 'dyn3',
                    text: 'Dynamic 3'
                },
                {
                    id: 'dyn4',
                    text: 'Dynamic 4'
                }
            ]);
            obs.complete();
        });
    }

    getTemplateList(): ImageEntity[] {
        return [
            {
                id: 'temp1',
                text: 'Template 1',
                image: 'assets/image0.jpg',
                winner: '4'
            } as ImageEntity,
            {
                id: 'temp2',
                text: 'Template 2',
                winner: '3'
            } as ImageEntity,
            {
                id: 'temp3',
                text: 'Template 3',
                image: 'assets/image1.jpg',
                winner: '1'
            } as ImageEntity,
            {
                id: 'temp4',
                text: 'Template 4',
                image: 'assets/image2.jpg',
                winner: '5'
            } as ImageEntity,
            {
                id: 'temp5',
                text: 'Template 5',
                image: 'assets/image3.jpg',
                winner: '2'
            } as ImageEntity
        ];
    }

    getChangeList(): S2Option[] {
        return [
            {
                id: '0',
                text: 'Cars',
                children: [
                    {
                        id: 'car1',
                        text: 'Car 1'
                    } as S2Option,
                    {
                        id: 'car2',
                        text: 'Car 2'
                    } as S2Option,
                    {
                        id: 'car3',
                        text: 'Car 3'
                    } as S2Option
                ]
            } as S2Option,
            {
                id: '0',
                text: 'Planes',
                children: [
                    {
                        id: 'plane1',
                        text: 'Plane 1'
                    } as S2Option,
                    {
                        id: 'plane2',
                        text: 'Plane 2'
                    } as S2Option,
                    {
                        id: 'plane3',
                        text: 'Plane 3'
                    } as S2Option
                ]
            } as S2Option
        ];
    }

    getChangeListAlternative(): S2Option[] {
        return [
            {
                id: '0',
                text: 'Cars',
                children: [
                    {
                        id: 'car1',
                        text: 'Car 1 - New'
                    } as S2Option,
                    {
                        id: 'car2',
                        text: 'Car 2 - New'
                    } as S2Option,
                    {
                        id: 'car3',
                        text: 'Car 3 - New'
                    } as S2Option
                ]
            } as S2Option,
            {
                id: '0',
                text: 'Planes',
                children: [
                    {
                        id: 'plane1',
                        text: 'Plane 1 - New'
                    } as S2Option,
                    {
                        id: 'plane2',
                        text: 'Plane 2 - New'
                    } as S2Option,
                    {
                        id: 'plane3',
                        text: 'Plane 3 - New'
                    } as S2Option
                ]
            } as S2Option
        ];
    }
}
