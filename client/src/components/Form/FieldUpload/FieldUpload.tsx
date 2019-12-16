import React, { ChangeEvent, useState, DragEvent } from 'react';
import './FieldUpload.scss';
import SvgSprite from '../../UI/SvgSprite/SvgSprite';
import Thumbnail from '../../../components/Thumbnail/Thumbnail';
import { InfoType } from '../../../helpers/types';
import Validators from '../../../helpers/validators';

type FieldUploadProps = {
    // value?: File[]
    onUpload: (files: File[]) => void;
};

const FieldUpload: React.FC<FieldUploadProps> = ({ onUpload }) => {
    const [files, setFiles] = useState<File[]>([]);
    const [info, setInfo] = useState<InfoType>();

    const save = async (add: File[]) => {
        // Filter duplicated files
        const fileNames = files.map(file => file.name);
        add = add.filter(file => !fileNames.includes(file.name));

        // Validate files format
        // const isValidArr = await Promise.all(add.map(async file => {
        //     return Validators.validateImages(file)}
        // ));

        // add = add.filter((file, i) => isValidArr[i]);

        // TODO validate files size

        const finalFiles = [...files, ...add];
        setFiles(finalFiles);
        onUpload(finalFiles);
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const filesList = event.currentTarget.files;
        if (!filesList) return;
        save(Array.from(filesList));
    };

    const onDropHandler = (event: DragEvent) => {
        event.preventDefault();
        save(Array.from(event.dataTransfer.files));
    };

    const onDragOverHandler = (event: DragEvent) => {
        event.preventDefault();
    };

    return (
        <div className="form__field-upload">
            {files && files.map(file => <Thumbnail file={file} key={file.name.split('.')[0]} />)}
            <label className="form__field-upload-label" onDrop={onDropHandler} onDragOver={onDragOverHandler}>
                <input
                    className="form__field-upload-input"
                    name="imgs[]"
                    multiple
                    type="file"
                    onChange={onChangeHandler}
                    accept="image/*"
                />
                <SvgSprite icon="plus" color="primary" />
                {info ? info : null}
            </label>
        </div>
    );
};

export default FieldUpload;
