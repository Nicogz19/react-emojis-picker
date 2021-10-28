import React from 'react';
import EmojiPicker from '../EmojiPicker/Index';

export class EmojiPickerContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleChangeEmoticon = this.handleChangeEmoticon.bind(this);
        this.handleChangeMensajeWhatsapp = this.handleChangeMensajeWhatsapp.bind(this);
        this.showEmojis = this.showEmojis.bind(this);
        this.hideEmojis = this.hideEmojis.bind(this);

        this.state = {
            openModalIcons: false,
            emoticonSelected: '',
            mensaje: '',
            show: false,
            cursorPosition: 0,
            modal: this.props.modal,
        }
    }
    
    handleChangeEmoticon(event){
        const mensajeWspp = this.state.mensaje ? this.state.mensaje : '';
        const cursor = this.state.cursorPosition
        
        //separo el mensaje en dos partes para luego insertar el emoticon dependiendo la posicion del cursor
        const mensajeDesglosado1 = mensajeWspp.substring(0, cursor)
        const mensajeDesglosado2 = mensajeWspp.substring(cursor, mensajeWspp.length)
   
        this.setState({
            emoticonSelected: event.target.value,
            mensaje: mensajeWspp ? mensajeDesglosado1.concat(event.target.value, mensajeDesglosado2) : event.target.value,
        })
    }

    handleChangeMensajeWhatsapp(event){
        const cursor = event.target.selectionStart;
        this.setState({
            mensaje: event.target.value,
            emoticonSelected: '',
            show: false,
            cursorPosition: cursor
        })
    }

    hideEmojis(){
        this.setState({
            show: false
        })
    }

    showEmojis(){
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const {mensaje, emoticonSelected, show, modal } = this.state
        return (
            <EmojiPicker 
                handleChangeEmoticon={this.handleChangeEmoticon}
                handleChangeMensajeWhatsapp={this.handleChangeMensajeWhatsapp}
                showEmojis={this.showEmojis}
                hideEmojis={this.hideEmojis}
                mensaje={mensaje}
                emoticonSelected={emoticonSelected}
                show={show}
                modal={modal}
            />
        );
    }
}

export default EmojiPickerContainer;