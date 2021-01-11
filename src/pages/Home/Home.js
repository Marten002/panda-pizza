import React, { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"

/* Actions */
import { handleAddCard } from "../../Redux/actions/cart"
import { handleFetchCards } from '../../Redux/actions/cards'
/* Actions */

import Headline from '../../components/Headline/Headline'
import Button from '../../components/Button/Button'
import Background from "../../components/Background/Background"

import Pizza from "./content/Pizza/Pizza"
import Sushi from "./content/Sushi/Sushi"
import Sets from "./content/Sets/Sets"
import Salad from "./content/Salad/Salad"
import Drinks from "./content/Drinks/Drinks"
import Other from "./content/Other/Other"

import backgroundImage from './images/backgroundImage.svg'

import cartIcon from './images/cart.svg'
import pizzaIcon from './images/pizza.svg'
import sushiIcon from './images/sushi.svg'
import setsIcon from './images/sets.svg'
import saladIcon from './images/salad.svg'
import drinksIcon from './images/drinks.svg'
import otherIcon from './images/other.svg'

import './Home.scss'

const Home = ({ component }) => {

    const { items, isLoaded, itemsCount } = useSelector(({ cards, cart }) => {
        return {
            items: cards.items,
            isLoaded: cards.isLoaded,
            itemsCount: cart.itemsCount
        }
    })

    const { t } = useTranslation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleFetchCards())
    }, [dispatch])

    const switchInfo = {
        Pizza: {
            path: "/",
            className: "select__button--pizza",
            image: pizzaIcon,
            text: "pizza"
        },
        Sushi: {
            path: "/sushi",
            className: "select__button--sushi",
            image: sushiIcon,
            text: "sushi"
        },
        Sets: {
            path: "/sets",
            className: "select__button--sets",
            image: setsIcon,
            text: "sets"
        },
        Salad: {
            path: "/salad",
            className: "select__button--salad",
            image: saladIcon,
            text: "salad"
        },
        Drinks: {
            path: "/drinks",
            className: "select__button--drinks",
            image: drinksIcon,
            text: "drinks"
        },
        Other: {
            path: "/other",
            className: "select__button--other",
            image: otherIcon,
            text: "other"
        }
    }

    const handleCardAdded = useCallback(
        (item) => dispatch(handleAddCard(item)),
        [dispatch]
    )

    const handleSwitchComponent = () => {
        switch (component) {
            case 'pizza':
                return <Pizza items={items} isLoaded={isLoaded} onAdded={handleCardAdded}/>
            case 'sushi':
                return <Sushi items={items} isLoaded={isLoaded} onAdded={handleCardAdded}/>
            case 'sets':
                return <Sets items={items} isLoaded={isLoaded} onAdded={handleCardAdded}/>
            case 'salad':
                return <Salad items={items} isLoaded={isLoaded} onAdded={handleCardAdded}/>
            case 'drinks':
                return <Drinks items={items} isLoaded={isLoaded} onAdded={handleCardAdded}/>
            case 'other':
                return <Other items={items} isLoaded={isLoaded} onAdded={handleCardAdded}/>
            default:
                return <Pizza items={items} isLoaded={isLoaded} onAdded={handleCardAdded}/>
        }
    }

    return (
        <>
            <Background
                image={backgroundImage}
                alt="background-home"
                className="app__background"
                withAnimation={true}
            />
            <main className="home">
                <Link className="home__link" to="/cart/">
                    <Button
                        className="home--cart"
                        image={cartIcon}
                        cart={true}
                        cartCount={itemsCount}
                        isActive={true}
                    />
                </Link>
                <Headline
                    className="headline--home"
                    text={t("Main.Headline.text")}
                    textCaption={t("Main.Headline.textCaption")}
                />
                <div className="home__content">
                    <div className="home__nav">
                        <div className="home__nav-container">
                            {
                                Object.values(switchInfo).map((item, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            to={item.path}
                                            className="home__nav-item"
                                        >
                                            <Button
                                                className={item.className}
                                                image={item.image}
                                                text={item.text}
                                                buttonPath={item.path}
                                            />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="home__panel">
                        {
                            handleSwitchComponent()
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
