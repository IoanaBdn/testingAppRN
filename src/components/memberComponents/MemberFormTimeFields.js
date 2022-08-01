import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import MemberFormInputFields from './MemberFormInputFields';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MemberFormTimeFields = ({
  labelAndPlaceholder,
  inputValue,
  inputChangeText,
  isFailingValidation,
  errorMessage,
  isInError,
  formTestId
}) => {
  const [time, setTime] = useState(inputValue || '');
  const [show, setShow] = useState(false);
  const [lastTime, setLastTime] = useState(inputValue || new Date());

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShow(Platform.OS === 'ios');
    setTime(currentTime);
    setLastTime(currentTime);
    inputChangeText(currentTime);
  };

  const onConfirm = (confirmedTime) => {
    setLastTime(confirmedTime);
    inputChangeText(confirmedTime);
    setTime(confirmedTime);
    setShow(false);
  };

  const cancelChange = () => {
    setTime(inputValue);
    setShow(false);
    setLastTime(inputValue || new Date());
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setShow(true)}>
        <MemberFormInputFields
          labelAndPlaceholder={labelAndPlaceholder}
          editableStatus={false}
          inputValue={time ? moment(time).format('HH:mm') : ''}
          isFailingValidation={isFailingValidation}
          errorMessage={errorMessage}
          isInError={isInError}
          formTestId={formTestId}
        />
      </TouchableOpacity>
      {show && (
        <View>
          <DateTimePicker
            value={new Date(lastTime)}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChange}
            testID="formTimePicker"
          />
          {Platform.OS === 'ios' && (
            <View>
              <Button
                style={{margin: 5}}
                title="Confirm"
                onPress={() => onConfirm(lastTime)}
                testID="confirmPickerButton"
              />
              <Button
                style={{margin: 5, paddingBottom: 10}}
                title="Cancel"
                onPress={() => cancelChange()}
                testID="cancelPickerButton"
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default MemberFormTimeFields;
