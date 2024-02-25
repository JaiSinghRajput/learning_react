import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (user) {
        return (
            <div>
                <h1>Welcome mr : {user.username}</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, voluptate deleniti ullam inventore consequuntur earum in dolorum deserunt quisquam doloribus iure amet rem voluptatum reiciendis officia alias neque. Architecto error fugit nihil consequuntur voluptate? Quas, ipsam atque. Inventore ipsum, officiis voluptates magnam rerum earum temporibus culpa, amet alias cumque obcaecati eligendi tempore fugit iusto necessitatibus dignissimos vero eos porro quidem repellendus reprehenderit ab accusantium consequuntur? Quos inventore facere maxime suscipit temporibus laboriosam ducimus. Sit, aspernatur. Similique, consequatur natus repudiandae minima culpa perferendis sint aut quis voluptate minus ex qui velit distinctio soluta animi exercitationem unde sit officia dicta magni saepe ut asperiores debitis quae. Provident eius eos hic neque qui blanditiis expedita, facilis cum ipsam delectus consectetur architecto quis non sequi dolores unde error inventore quibusdam deleniti numquam. Modi illum numquam, quae id pariatur rem omnis molestias ut eius, nostrum vero maxime error vel natus dolor beatae rerum facere. Excepturi voluptatibus repudiandae numquam sint saepe quo, repellat eius, dolor, magnam modi suscipit exercitationem officiis non tempore similique aspernatur quisquam sit nesciunt inventore maiores placeat laborum in facere dolore? Ipsam, sequi ab. Dolore deserunt voluptas molestias amet quos vel sed, eveniet dolores sapiente. Magni minima, repellendus placeat ab nostrum eaque accusantium</p>
            </div>
        )
    }
    else {
        return <div>Please Login First</div>
    }
}
export default Profile
